/**
 * R2 Video Configuration
 * 
 * Set this to your R2 public URL:
 * - Development: Use the R2.dev subdomain or your dev custom domain
 * - Production: Use your production custom domain (e.g., https://videos.curlycloud.dev)
 * 
 * You can also use environment variables:
 * - NEXT_PUBLIC_R2_VIDEO_BASE_URL for client-side
 * - R2_VIDEO_BASE_URL for server-side (if needed)
 */

// Use environment variable if set, otherwise use production URL
// For development, you can temporarily override this or use the env var
export const R2_VIDEO_BASE_URL = 
  process.env.NEXT_PUBLIC_R2_VIDEO_BASE_URL || 
  process.env.R2_VIDEO_BASE_URL || 
  'https://videos.curlycloud.dev' // Update this to your actual R2 public URL

/**
 * Helper function to get the full R2 URL for a video file
 */
export function getR2VideoUrl(filename: string): string {
  // Remove leading slash if present
  const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename
  return `${R2_VIDEO_BASE_URL}/${cleanFilename}`
}

