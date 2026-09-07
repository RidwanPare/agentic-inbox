// Configuration des permissions (Mapping Email Utilisateur -> Mailboxes autorisées)
export const USER_PERMISSIONS: Record<string, string[]> = {
	"lawaliridwanpare@gmail.com": [
		"ridwan.p@koora-group.com",
		"contact@koora-group.com"
	],
	"agbehyavargas@gmail.com": [
		"kossivi.a@koora-group.com",
		"contact@koora-group.com"
	]
};

export function canAccessMailbox(userEmail: string | undefined, mailboxId: string): boolean {
	// Si aucun email (ex: dév local sans Access), on peut choisir de bloquer ou autoriser.
	// Ici on bloque par défaut, sauf si on est en dev (géré par le fait que header manque ?).
	// Mais soyons stricts : on demande l'email.
	if (!userEmail) {
		// Fallback pour le dev local : si le header n'existe pas du tout et qu'on est sur localhost.
		// Mais par sécurité, retournons false sauf admin.
		// Pour faire simple, si pas d'email, on bloque.
		return false; 
	}
	
	const email = userEmail.toLowerCase().trim();
	const allowedMailboxes = USER_PERMISSIONS[email] || [];
	return allowedMailboxes.includes(mailboxId.toLowerCase().trim());
}
