// Simple in-memory rate limiting
interface RateLimitRecord {
  count: number
  resetTime: number
}

const rateLimit = new Map<string, RateLimitRecord>()

export function checkRateLimit(identifier: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now()
  const record = rateLimit.get(identifier)
  
  // تنظيف السجلات القديمة
  if (record && now > record.resetTime) {
    rateLimit.delete(identifier)
  }
  
  const current = rateLimit.get(identifier)
  
  if (!current) {
    rateLimit.set(identifier, {
      count: 1,
      resetTime: now + windowMs
    })
    return true
  }
  
  if (current.count >= maxRequests) {
    return false // تم تجاوز الحد
  }
  
  current.count++
  return true
}

export function getRateLimitInfo(identifier: string): { remaining: number; resetTime: number } | null {
  const record = rateLimit.get(identifier)
  if (!record) return null
  
  return {
    remaining: Math.max(0, 5 - record.count),
    resetTime: record.resetTime
  }
}
