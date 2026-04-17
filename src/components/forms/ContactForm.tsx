"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations } from "next-intl";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";

const contactSchema = z.object({
  name: z.string().min(2, "forms.quote.validation.name"),
  email: z.string().email("forms.quote.validation.email"),
  phone: z.string().min(1, "forms.quote.validation.required"),
  message: z.string().min(10, "forms.contact.validation.message"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSuccess(false);
    setError(false);
    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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

  const getErrorMessage = (errorKey?: string) => {
    if (!errorKey) return undefined;
    try {
      return t(errorKey);
    } catch {
      return errorKey;
    }
  };

  return (
    <div className="w-full">
      <h2 className="mb-8 text-2xl font-bold text-zinc-900">
        {t("forms.contact.title")}
      </h2>

      {success && (
        <div className="mb-6 rounded-lg bg-green-50 p-4 text-sm text-green-700 border border-green-200">
          ✅ {t("forms.contact.success")}
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700 border border-red-200">
          ❌ {t("forms.contact.error")}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label={t("forms.contact.fields.name")}
          placeholder={t("forms.contact.fields.name")}
          error={getErrorMessage(errors.name?.message)}
          {...register("name")}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Input
            label={t("forms.contact.fields.email")}
            type="email"
            placeholder={t("forms.contact.fields.email")}
            error={getErrorMessage(errors.email?.message)}
            {...register("email")}
          />

          <Input
            label={t("forms.contact.fields.phone")}
            placeholder={t("forms.contact.fields.phone")}
            error={getErrorMessage(errors.phone?.message)}
            {...register("phone")}
          />
        </div>

        <Textarea
          label={t("forms.contact.fields.message")}
          placeholder={t("forms.contact.fields.message")}
          rows={6}
          error={getErrorMessage(errors.message?.message)}
          {...register("message")}
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
              {t("forms.quote.submitting")}
            </>
          ) : (
            t("forms.contact.submit")
          )}
        </Button>
      </form>
    </div>
  );
}
