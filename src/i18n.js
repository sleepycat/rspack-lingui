import { i18n } from '@lingui/core'

export const locales = {
	en: 'English',
	fr: 'Francais',
}
export const defaultLocale = 'en'

export async function dynamicActivate(locale) {
	const { messages } = await import(
		`@lingui/loader!./locales/${locale}/messages.po`
	)
	i18n.load(locale, messages)
	i18n.activate(locale)
}
