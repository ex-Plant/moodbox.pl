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

export type FormT = z.infer<typeof formSchema>;

export const initData: FormT = {
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
};
