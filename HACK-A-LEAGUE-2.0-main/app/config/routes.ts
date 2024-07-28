export const ROUTES =
{
	HOME: "/",
	SIGN_IN: "/sign-in",
	AR_VIEW: "/ar",
	SHOE_HOME: "/ar-shoes",
	SHOE_DETAILS: (id: string) => `/ar-shoes/${id}` as const,
	AR_CAMERA: "/ai-camera",
	AR_CAMERA_SECURITY: "/ai-camera/security",
} as const;