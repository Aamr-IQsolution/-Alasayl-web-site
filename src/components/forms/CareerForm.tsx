"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations } from "next-intl";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";

const careerSchema = z.object({
  name: z.string().min(2, "careersPage.form.error"),
  email: z.string().email("careersPage.form.error"),
  phone: z.string().min(10, "careersPage.form.error"),
  position: z.string().min(1, "careersPage.form.error"),
  coverLetter: z.string().max(1000).optional(),
  cvFile: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, "careersPage.form.error")
    .refine((file) => file.type === "application/pdf", "careersPage.form.error"),
});

type CareerFormData = z.infer<typeof careerSchema>;

export default function CareerForm() {
  const t = useTranslations("careersPage.form");
  const commonT = useTranslations("forms.career"); // Keep for specific validation messages if needed
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
  });

  const positions = [
    { value: "driver", label: "Chauffeur / Bezorger" },
  ];

  const onSubmit = async (data: CareerFormData) => {
    setIsSubmitting(true);
    setSuccess(false);
    setError(false);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("position", data.position);
    if (data.coverLetter) formData.append("coverLetter", data.coverLetter);
    formData.append("cvFile", data.cvFile);

    try {
      const res = await fetch("/api/send-application", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {success && (
        <div className="mb-6 rounded-lg bg-green-50 p-4 text-sm text-green-700 border border-green-200">
          ✅ {t("success")}
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700 border border-red-200">
          ❌ {t("error")}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Input
            label={t("name")}
            placeholder={t("name")}
            error={errors.name ? commonT("validation.name") : undefined}
            {...register("name")}
          />

          <Input
            label={t("email")}
            type="email"
            placeholder={t("email")}
            error={errors.email ? commonT("validation.email") : undefined}
            {...register("email")}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Input
            label={t("phone")}
            placeholder={t("phone")}
            error={errors.phone ? commonT("validation.phone") : undefined}
            {...register("phone")}
          />

          <Select
            label={t("position")}
            options={positions}
            error={errors.position ? commonT("validation.required") : undefined}
            {...register("position")}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700">
            {t("cvUpload")} *
          </label>
          <input
            type="file"
            accept=".pdf"
            className={`w-full rounded-lg border bg-white px-3 py-2 text-sm outline-none transition-all focus:ring-2 ${
              errors.cvFile ? "border-red-500 focus:ring-red-200" : "border-zinc-200 focus:border-primary focus:ring-primary/20"
            }`}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setValue("cvFile", file, { shouldValidate: true });
            }}
          />
          {errors.cvFile && (
            <p className="mt-1 text-xs text-red-500">
              {errors.cvFile.type === "application/pdf" ? commonT("validation.fileSize") : commonT("validation.fileType")}
            </p>
          )}
        </div>

        <Textarea
          label={t("coverLetter")}
          placeholder={t("coverLetter")}
          rows={4}
          error={errors.coverLetter ? commonT("validation.coverLetter") : undefined}
          {...register("coverLetter")}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loading size="small" className="mr-2 border-white" />
              {commonT("submitting")}
            </>
          ) : (
            t("submit")
          )}
        </Button>
      </form>
    </div>
  );
}
