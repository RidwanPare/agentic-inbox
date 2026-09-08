const fs = require('fs');

let content = fs.readFileSync('app/components/Sidebar.tsx', 'utf8');

content = content.replace(
  /<aside className="h-full w-64 bg-kumo-recessed flex flex-col shrink-0 border-r border-kumo-line">/,
  `<aside className="h-full w-64 bg-kumo-recessed flex flex-col shrink-0 border-r border-kumo-line">
			<div className="px-4 py-4 flex items-center justify-center border-b border-kumo-line mb-2">
				<img src="/logo.png" alt="Koora Group" className="h-10 object-contain" />
			</div>`
);

// Translate back to mailboxes link
content = content.replace(
  /<span>Mailboxes<\/span>/,
  `<span>Boîtes de réception</span>`
);
content = content.replace(
  /"Mailboxes"/,
  `"Boîtes de réception"`
);

// Also translate system folders here
const translations = [
  ['label: "Inbox"', 'label: "Boîte de réception"'],
  ['label: "Sent"', 'label: "Envoyés"'],
  ['label: "Drafts"', 'label: "Brouillons"'],
  ['label: "Archive"', 'label: "Archives"'],
  ['label: "Trash"', 'label: "Corbeille"'],
  ['"New Folder"', '"Nouveau Dossier"'],
  ['"Create New Folder"', '"Créer un nouveau dossier"'],
  ['"Folder Name"', '"Nom du dossier"'],
  ['"Cancel"', '"Annuler"'],
  ['"Create"', '"Créer"'],
  ['"Folders"', '"Dossiers"'],
];

for (const [en, fr] of translations) {
  content = content.replace(new RegExp(en, 'g'), fr);
}

fs.writeFileSync('app/components/Sidebar.tsx', content);
