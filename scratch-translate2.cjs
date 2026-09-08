const fs = require('fs');

function translateFile(filePath, translations) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [en, fr] of translations) {
    content = content.replace(new RegExp(en, 'g'), fr);
  }
  fs.writeFileSync(filePath, content);
}

// Mailbox Split View (Sidebar)
translateFile('app/components/MailboxSplitView.tsx', [
  ['"Inbox"', '"Boîte de réception"'],
  ['"Sent"', '"Envoyés"'],
  ['"Drafts"', '"Brouillons"'],
  ['"Archive"', '"Archives"'],
  ['"Trash"', '"Corbeille"'],
  ['"Folders"', '"Dossiers"'],
  ['"Spam"', '"Spam"'],
  ['"Compose"', '"Nouveau message"'],
  ['"Search emails..."', '"Rechercher des emails..."'],
  ['"Mailboxes"', '"Boîtes de réception"'],
  ['"Agent"', '"Assistant"'],
  ['"Email Agent"', '"Assistant Koora"'],
]);

// Email List
translateFile('app/routes/email-list.tsx', [
  ['"No emails in this folder"', '"Aucun email dans ce dossier"'],
  ['"No emails found"', '"Aucun email trouvé"'],
  ['"Try adjusting your search or filters"', '"Essayez d\'ajuster votre recherche ou vos filtres"'],
  ['"conversations"', '"conversations"'],
  ['"conversation"', '"conversation"'],
]);

// Agent Panel
translateFile('app/components/AgentPanel.tsx', [
  ['"Email Agent"', '"Assistant Koora"'],
  ['"Agent"', '"Assistant"'],
  ['"Show me the latest inbox emails"', '"Affiche-moi les derniers emails"'],
  ['"Draft a reply to the current email"', '"Rédiger une réponse à l\'email actuel"'],
  ['"Draft a new email to"', '"Rédiger un nouvel email à"'],
  ['"List all my unread emails"', '"Lister tous mes emails non lus"'],
  ['"Fetching emails"', '"Récupération des emails"'],
  ['"Reading email"', '"Lecture de l\'email"'],
  ['"Loading thread"', '"Chargement du fil"'],
  ['"Searching"', '"Recherche en cours"'],
  ['"Drafting email"', '"Rédaction de l\'email"'],
  ['"Drafting reply"', '"Rédaction de la réponse"'],
  ['"Marking read"', '"Marquage comme lu"'],
  ['"Moving email"', '"Déplacement de l\'email"'],
  ['"Discarding draft"', '"Suppression du brouillon"'],
]);

