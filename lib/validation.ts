import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Nama minimal 2 karakter')
    .max(80, 'Nama terlalu panjang')
    .regex(/^[a-zA-Z\s.'-]+$/, 'Nama hanya boleh berisi huruf'),
  email: z
    .string()
    .email('Format email tidak valid')
    .max(120, 'Email terlalu panjang'),
  message: z
    .string()
    .min(10, 'Pesan minimal 10 karakter')
    .max(2000, 'Pesan maksimal 2000 karakter'),
});

export type ContactSchema = z.infer<typeof contactSchema>;
