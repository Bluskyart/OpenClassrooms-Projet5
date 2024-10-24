## Scénario

Dans cette mise en situation, je prends le rôle d'un développeur front-end en freelance pour Kasa, une entreprise de location d’appartements entre particuliers.


Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

![1680512368252_Kasa logo](https://github.com/user-attachments/assets/1214c82f-81b9-48d2-84e9-8bd57e1ff6ff)

Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance.

Un point est prévu avec la CTO plus tard dans la semaine, mais pour que l'on puisse se familiariser avec les enjeux de notre mission, nous trouvons le récapitulatif suivant dans notre boîte mail :

<table>
<tbody>
<tr>
<td>
<p><strong>Objet&nbsp;</strong>: Brief refonte site Kasa<br><strong>De&nbsp;</strong>: Laura<br><strong>À</strong>&nbsp;: Moi</p>
</td>
</tr>
<tr>
<td>
<p>Hello,</p>
<p>&nbsp;</p>
<p>Bienvenue !&nbsp;Tu vas pouvoir nous aider à donner vie à un chantier sur lequel on travaille depuis plusieurs mois.</p>
<p>&nbsp;</p>
<p><strong>Ton objectif</strong>&nbsp;: Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives&nbsp;!) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité&nbsp;!&nbsp;</p>
<p>&nbsp;</p>
<p><strong>Back-end / data</strong>&nbsp;: Le recrutement de la personne en charge du back-end n'est pas terminé et va prendre plus de temps que prévu. Du coup, il va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20&nbsp;dernières annonces de logements dans&nbsp;<a class="custom-link" href="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json">ce fichier JSON</a>&nbsp;pour que tu puisses construire le Front qui correspond.</p>
<p>&nbsp;</p>
<p><strong>Contraintes techniques&nbsp;</strong>:&nbsp;Tu trouveras les&nbsp;<a class="custom-link" href="https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/IW_P8+React+Kasa/Kasa+coding+guidelines+-+IW+-+DW.pdf">coding guidelines de Kasa ici</a>.&nbsp;Comme tu le verras, nous utilisons habituellement Create React App pour créer les applications React, mais tu peux utiliser un autre bundler comme Vite par exemple si tu préfères.</p>
<p>&nbsp;</p>
<p>Voilà, j'espère que ce petit récapitulatif t'aura donné suffisamment de pistes pour aborder sereinement tes premiers jours chez nous.</p>
<p>Très bonne journée à toi !</p>
<p>&nbsp;</p>
<p>Laura<strong>,</strong></p>
<p>CTO</p>
<p>&nbsp;</p>
</td>
</tr>
</tbody>
</table>

## Le lendemain

Nina a répondu favorablement à notre demande, et a convenu d’un rendez-vous téléphonique avec nous pour discuter des détails de l’optimisation du site.
Voici le replay de la discussion que nous avons eue avec Nina :

https://github.com/user-attachments/assets/d2163670-7466-4b14-a6e4-4e03c103591d

Suite à notre discussion, nous avons reçu un mail de Nina : 

<table>
<tbody>
<tr>
<td>
<p><strong>Objet :&nbsp;</strong>RE RE Proposition d’optimisation de votre SEO</p>
<p><strong>De :&nbsp;</strong>Nina Carducci</p>
<p><strong>À :&nbsp;</strong>Moi</p>
</td>
</tr>
<tr>
<td>
<p>Merci pour vos précisions durant notre appel.&nbsp;</p>
<p>&nbsp;</p>
<p>Pour résumer le cadre de votre mission, vous allez donc&nbsp;:&nbsp;</p>
<ul>
<li>faire une optimisation globale du site, tant sur les performances que sur le SEO&nbsp;;</li>
<li>mettre en place le référencement local en utilisant Schema.org&nbsp;;</li>
<li>ajouter les metas pour les réseaux sociaux&nbsp;;</li>
<li>faire les modifications liées à l’accessibilité du site&nbsp;;</li>
<li>produire un rapport d’optimisation présentant toutes vos actions et leur impact.</li>
</ul>
<p>&nbsp;</p>
<p>Comme convenu, voici les infos dont vous aurez besoin pour mon référencement local&nbsp;:</p>
<ul>
<li>Mon adresse : 68 avenue Alsace-Lorraine, 33200 Bordeaux.</li>
<li>Mon numéro de téléphone : 05 56 67 78 89.</li>
<li>Je réponds au téléphone du lundi au vendredi de 10&nbsp;h à 19&nbsp;h.</li>
</ul>
<p>&nbsp;</p>
<p>Pour finir, j’aimerais vous demander un dernier travail. Comme vous avez certainement dû le constater, il y a des bugs dans le code, et j’aimerais que vous les corrigiez&nbsp;:&nbsp;</p>
<ol>
<li>La navigation dans la modale de la galerie entre images précédente et suivante ne fonctionne pas.&nbsp;</li>
<li>Lorsque l’on change de filtre pour afficher les images, on ne voit pas quelle catégorie est sélectionnée. Normalement, la catégorie devrait avoir la couleur dorée en fond. Comme pour le filtre par défaut.&nbsp;&nbsp;</li>
</ol>
<p>&nbsp;</p>
<p>Enfin, vous trouverez le code de mon site sur&nbsp;<a class="custom-link" href="https://github.com/OpenClassrooms-Student-Center/Nina-Carducci-Dev">ce repo GitHub</a>. Vous pouvez le cloner et modifier le code sur un nouveau repo à me partager quand il sera prêt.</p>
<p>Merci beaucoup et bon développement,</p>
<p>&nbsp;</p>
<p><strong>Nina Carducci</strong></p>
</td>
</tr>
</tbody>
</table>

### Pièces rendues

[Site de Nina Carducci Optimisé](https://bluskyart.github.io/OpenClassooms-Projet4/)

[Rapport d'optimisation](https://github.com/user-attachments/files/17194933/Lescrohart_Guerwan_2_audit_lighthouse_092024.pdf)
