import  "./WelcomeComponent.css"

function WelcomeComponent({nom = "inconnu",age = 18}) {
    return (
        <>
            <p className={"texte1"}>Bienvenue {nom} sur l'application React ! <span className={"texte2"}>Vous avez {age} ans!</span></p>
        </>
    )
}

export  default  WelcomeComponent