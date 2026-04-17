import { z } from 'zod';

// Sanitization function - تنظيف المدخلات من الأكواد الخطرة
export function sanitizeString(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // إزالة HTML tags
    .replace(/[{}]/g, '') // إزالة curly braces
    .replace(/javascript:/gi, '') // إزالة javascript:
    .replace(/on\w+=/gi, '') // إزالة event handlers
    .slice(0, 1000); // حد أقصى 1000 حرف
}

// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 255;
}

// Phone validation
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s+\-()]{10,20}$/;
  return phoneRegex.test(phone);
}

// Name validation
export function isValidName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s\u0600-\u06FF'-]{2,100}$/;
  return nameRegex.test(name);
}

// Prevent SQL Injection
export function containsSQLInjection(input: string): boolean {
  if (!input) return false;
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/gi,
    /(--|;|\/\*|\*\/|xp_|sp_)/gi,
  ];
  return sqlPatterns.some(pattern => pattern.test(input));
}

// Prevent XSS attacks
export function containsXSS(input: string): boolean {
  if (!input) return false;
  const xssPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /<iframe[^>]*>.*?<\/iframe>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
  ];
  return xssPatterns.some(pattern => pattern.test(input));
}

// Validation للـ Quote Form
export const quoteValidationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(10).max(20),
  address: z.string().min(5).max(200),
  cargoType: z.string().min(3).max(100),
  weight: z.number().min(1).max(50000),
  pickupLocation: z.string().min(5).max(200),
  deliveryLocation: z.string().min(5).max(200),
  transportDate: z.string(),
  serviceType: z.enum(['normal', 'urgent']),
  notes: z.string().max(500).optional().or(z.literal('')),
});

// Validation للـ Contact Form
export const contactValidationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(10).max(20),
  message: z.string().min(10).max(1000),
});

// Validation للـ Career Form
export const careerValidationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(10).max(20),
  position: z.string().min(1).max(50),
  coverLetter: z.string().max(1000).optional().or(z.literal('')),
});
