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

const quoteSchema = z.object({
  name: z.string().min(2, "validation.name"),
  email: z.string().email("validation.email"),
  phone: z.string().min(1, "validation.required"),
  address: z.string().min(5, "validation.address"),
  cargoType: z.string().min(3, "validation.cargo"),
  weight: z.preprocess((val) => Number(val), z.number().min(1, "validation.required")),
  pickupLocation: z.string().min(5, "validation.location"),
  deliveryLocation: z.string().min(5, "validation.location"),
  transportDate: z.string().refine((date) => new Date(date) > new Date(), {
    message: "validation.date",
  }),
  serviceType: z.enum(["normal", "urgent"]),
  notes: z.string().max(500).optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteForm() {
  const t = useTranslations("forms.quote");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      serviceType: "normal",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSuccess(false);
    setError(false);
    try {
      const res = await fetch("/api/send-quote", {
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
      <h2 className="mb-8 text-2xl font-bold text-zinc-900">{t("title")}</h2>

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

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input
          label={t("fields.name")}
          placeholder={t("fields.name")}
          error={getErrorMessage(errors.name?.message)}
          {...register("name")}
        />

        <Input
          label={t("fields.email")}
          type="email"
          placeholder={t("fields.email")}
          error={getErrorMessage(errors.email?.message)}
          {...register("email")}
        />

        <Input
          label={t("fields.phone")}
          placeholder={t("fields.phone")}
          error={getErrorMessage(errors.phone?.message)}
          {...register("phone")}
        />

        <Input
          label={t("fields.address")}
          placeholder={t("fields.address")}
          error={getErrorMessage(errors.address?.message)}
          {...register("address")}
        />

        <Input
          label={t("fields.cargoType")}
          placeholder={t("fields.cargoType")}
          error={getErrorMessage(errors.cargoType?.message)}
          {...register("cargoType")}
        />

        <Input
          label={t("fields.weight")}
          type="number"
          placeholder={t("fields.weight")}
          error={getErrorMessage(errors.weight?.message)}
          {...register("weight")}
        />

        <Input
          label={t("fields.pickup")}
          placeholder={t("fields.pickup")}
          error={getErrorMessage(errors.pickupLocation?.message)}
          {...register("pickupLocation")}
        />

        <Input
          label={t("fields.delivery")}
          placeholder={t("fields.delivery")}
          error={getErrorMessage(errors.deliveryLocation?.message)}
          {...register("deliveryLocation")}
        />

        <Input
          label={t("fields.date")}
          type="date"
          error={getErrorMessage(errors.transportDate?.message)}
          {...register("transportDate")}
        />

        <Select
          label={t("fields.service")}
          options={[
            { label: t("fields.normal"), value: "normal" },
            { label: t("fields.urgent"), value: "urgent" },
          ]}
          error={getErrorMessage(errors.serviceType?.message)}
          {...register("serviceType")}
        />

        <div className="md:col-span-2">
          <Textarea
            label={t("fields.notes")}
            placeholder={t("fields.notes")}
            maxLength={500}
            error={getErrorMessage(errors.notes?.message)}
            {...register("notes")}
          />
        </div>

        <div className="md:col-span-2">
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
                {t("submitting")}
              </>
            ) : (
              t("submit")
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
