import { useState } from "react"

const TodoSection = () => {
  const [isVisible, setIsVisible] = useState(false); // Gère l'état de visibilité

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Change l'état pour afficher/masquer la section
  };

  return (
    <div>
      <h3 className={"container-title pointer"} onClick={toggleVisibility}>
        TO DO
        <span className={`icon ${isVisible ? "rotate" : ""}`}> ⬇️</span>
      </h3>
      {isVisible && (
        <div className={"container"}>
          <h4 className={"container-title"}>Étape 1 : Structure des données de la tâche</h4>
          <p>Chaque tâche devra contenir les éléments suivants :</p>
          <ul className={"list"}>
            <li className={"list-item"}>Nom (obligatoire)</li>
            <li className={"list-item"}>Description (optionnelle)</li>
            <li className={"list-item"}>Priorité (Basse / Normal / Urgent)</li>
            <li className={"list-item"}>Complétion (booléenne, vrai ou faux)</li>
          </ul>

          <h4 className={"container-title"}>Étape 2 : Création du formulaire d'ajout de tâche</h4>
          <p>Le formulaire devra comprendre :</p>
          <ul className={"list"}>
            <li className={"list-item"}>Un champ de texte pour le nom (obligatoire)</li>
            <li className={"list-item"}>Un champ de texte pour la description (optionnel)</li>
            <li className={"list-item"}>Un menu déroulant ou des boutons radio pour sélectionner la priorité (Basse, Normal, Urgent)</li>
            <li className={"list-item"}>Un bouton pour soumettre le formulaire</li>
          </ul>

          <h4 className={"container-title"}>Étape 3 : Validation du formulaire</h4>
          <p>Il faut ajouter une validation pour le formulaire :</p>
          <ul className={"list"}>
            <li className={"list-item"}>Le champ "Nom" doit être rempli, sinon il sera mis en rouge et un message d'erreur apparaîtra.</li>
            <li className={"list-item"}>La priorité doit être sélectionnée, sinon un avertissement sera affiché.</li>
            <li className={"list-item"}>Lorsque le formulaire est valide, la tâche est ajoutée à la liste.</li>
          </ul>

          <h4 className={"container-title"}>Étape 4 : Création de la liste de tâches</h4>
          <p>La liste doit afficher chaque tâche ajoutée et offrir les actions suivantes :</p>
          <ul className={"list"}>
            <li className={"list-item"}>Marquer une tâche comme terminée (changer le statut de "complétée" à vrai)</li>
            <li className={"list-item"}>Supprimer une tâche</li>
          </ul>

          <h4 className={"container-title"}>Étape 5 : Appliquer des couleurs aux tâches</h4>
          <p>Les couleurs suivantes doivent être appliquées selon les critères :</p>
          <ul className={"list"}>
            <li className={"list-item"}>Tâches urgentes : Rouge</li>
            <li className={"list-item"}>Tâches terminées : Gris avec rayures diagonales (pour simuler l'effet de "terminée")</li>
          </ul>

          <h4 className={"container-title"}>Étape 6 : Ajouter des filtres à la liste</h4>
          <p>Ajouter des filtres pour afficher les tâches selon leur statut :</p>
          <ul className={"list"}>
            <li className={"list-item"}>Tâches en cours (celles qui ne sont pas terminées)</li>
            <li className={"list-item"}>Tâches urgentes</li>
            <li className={"list-item"}>Tâches terminées</li>
          </ul>

          <h4 className={"container-title"}>Étape BONUS : Optimisation</h4>
          <p>Facultatif : Ajouter des fonctionnalités supplémentaires, comme le tri des tâches par priorité ou par date de création.</p>
        </div>
      )}
    </div>
  )
}

export default TodoSection