import { z } from 'zod';
export const formSchema = z.object({
	company_name: z.string().default(''),
	nip: z.coerce.string().default(''),
	email: z.string().email().or(z.string().length(0)).default(''),
	website: z.coerce.string().default(''),
	projects_per_year: z.coerce.string().default(''),
	city: z.string().default(''),
	project_type: z.string().default(''),
	completion_date: z.string().default(''),
	project_stage: z.string().default(''),
	project_area: z.string().default(''),
	project_budget: z.string().default(''),
});

export type FormT = z.infer<typeof formSchema>;

export const ATTRIBUTE_KEY_PL: Record<keyof FormT, string> = {
	company_name: 'Nazwa firmy / pracowni',
	nip: 'NIP',
	email: 'E-mail',
	website: 'Strona WWW',
	projects_per_year: 'Liczba projektów rocznie',
	city: 'Miejscowość',
	project_type: 'Typ projektu',
	completion_date: 'Termin realizacji (MM/RR)',
	project_stage: 'Etap projektu',
	project_area: 'Metraż',
	project_budget: 'Budżet',
};

// Unified action state type used with useActionState
export type FormStateT = {
	data: FormT;
	error?: boolean;
};

export const initState: FormStateT = {
	data: {
		company_name: '',
		nip: '',
		email: '',
		website: '',
		projects_per_year: '',
		city: '',
		project_type: '',
		completion_date: '',
		project_stage: '',
		project_area: '',
		project_budget: '',
	},
	error: false,
};

const schema = z.object({
	company_name: z.string().min(1),
	email: z.string().length(3, { message: 'Podaj prawdziwy email' }),
	// accept both string and number, but transform to string
	projects_per_year: z.union([z.string().min(1), z.number().min(1)]).transform((value) => String(value)),
	nip: z
		.string()
		.length(10, { message: 'NIP musi mieć dokładnie 10 cyfr' })
		.regex(/^[0-9]+$/, { message: 'Tylko cyfry są dozwolone' }),
	// optional field, if filled only with default empty string it will convert to undefined
	website: z
		.string()
		.optional()
		.transform((v) => v || undefined),
	city: z.string().min(1),
	project_type: z.string().min(1),
	completion_date: z.string().min(1),
	project_stage: z.string().min(1),
	project_area: z.string().min(1),
	project_budget: z.string().min(1),
	notifications: z.object({
		email: z.string(),
		sms: z.string(),
		push: z.boolean(),
	}),
});
