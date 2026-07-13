import {z} from 'zod'

export const ContactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(20, 'Message must be at least 20 characters long'),
})

export type ContactPayload = z.infer<typeof ContactSchema>
