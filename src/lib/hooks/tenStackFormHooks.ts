import { FormCheckbox } from '@/components/home/cart/tenstack/FormCheckbox';
import { FormInput } from '@/components/home/cart/tenstack/FormInput';
import { FormSelect } from '@/components/home/cart/tenstack/FormSelect';
import { FormTextarea } from '@/components/home/cart/tenstack/FormTextarea';
import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts();

const { useAppForm } = createFormHook({
	fieldComponents: {
		Input: FormInput,
		Textarea: FormTextarea,
		Select: FormSelect,
		Checkbox: FormCheckbox,
	},
	formComponents: {},
	fieldContext,
	formContext,
});

export { useAppForm, useFieldContext, useFormContext };
