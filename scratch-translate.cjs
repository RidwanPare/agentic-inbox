const fs = require('fs');
let content = fs.readFileSync('app/routes/home.tsx', 'utf8');

// Replace translations
const translations = [
  ['"Mailboxes"', '"Boîtes de réception"'],
  ['"New Mailbox"', '"Nouvelle Boîte"'],
  ['"Create Mailbox"', '"Créer une boîte"'],
  ['"Create New Mailbox"', '"Créer une nouvelle boîte"'],
  ['"Delete Mailbox"', '"Supprimer la boîte"'],
  ['"Mailbox created successfully!"', '"Boîte de réception créée avec succès !"'],
  ['"Failed to create mailbox"', '"Échec de la création de la boîte"'],
  ['"Mailbox deleted"', '"Boîte de réception supprimée"'],
  ['"Failed to delete mailbox"', '"Échec de la suppression de la boîte"'],
  ['"No mailboxes yet"', '"Aucune boîte de réception"'],
  ['"Your email routing is configured but no mailboxes have been created yet. They will appear here automatically."', '"Votre routage email est configuré mais aucune boîte n\'a encore été créée. Elles apparaîtront ici automatiquement."'],
  ['"Create a mailbox to start sending and receiving emails with your domain."', '"Créez une boîte pour commencer à envoyer et recevoir des emails avec votre domaine."'],
  ['"Please fill in all fields"', '"Veuillez remplir tous les champs"'],
  ['"Email Address"', '"Adresse Email"'],
  ['"Display Name (optional)"', '"Nom d\'affichage (optionnel)"'],
  ['"Cancel"', '"Annuler"'],
  ['"Create"', '"Créer"'],
  ['"Delete"', '"Supprimer"'],
  ['"Are you sure you want to delete "', '"Êtes-vous sûr de vouloir supprimer "'],
  ['"? This action cannot be undone."', '" ? Cette action est irréversible."'],
];

for (const [en, fr] of translations) {
  content = content.replace(new RegExp(en, 'g'), fr);
}

// Add logo to header
content = content.replace(
  /<h1 className="text-2xl font-bold text-kumo-default">Boîtes de réception<\/h1>/,
  `<div className="flex items-center gap-3">
    <img src="/logo.png" alt="Koora Group" className="h-8 object-contain" />
    <h1 className="text-2xl font-bold text-kumo-default">Boîtes de réception</h1>
  </div>`
);

fs.writeFileSync('app/routes/home.tsx', content);
