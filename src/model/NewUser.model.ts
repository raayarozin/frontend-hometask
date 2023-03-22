import { z, ZodType } from 'zod';
import { chosenCity } from '../utils/getCity';
import { streets } from '../utils/getStreetsInCity';

export type FormData = {
  fullName: string;
  userId: string;
  birthDate: Date;
  email: string;
  phone: string;
  city: string;
  street: string;
  houseNumber: string;
};

export const NewUserSchema: ZodType<FormData> = z.object({
  fullName: z.string().trim().min(5).max(30),
  userId: z.string().trim().length(9),
  birthDate: z.coerce.date().max(new Date()),
  email: z.string().trim().email(),
  phone: z.string().trim().startsWith('0').length(10),
  city: z
    .string()
    .trim()
    .refine((val: string) => val !== '' && val === chosenCity),
  street: z
    .string()
    .trim()
    .min(2)
    .refine((val: string) => streets.includes(val)),
  houseNumber: z.string().trim().min(1),
});

export type NewUser = z.infer<typeof NewUserSchema>;
