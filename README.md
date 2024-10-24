## Scénario

Dans cette mise en situation, je prends le rôle d'un développeur front-end en freelance pour Kasa, une entreprise de location d’appartements entre particuliers.


Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

<p align="center">https://github.com/user-attachments/assets/1214c82f-81b9-48d2-84e9-8bd57e1ff6ff)</p>

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


### Quelque heures plus tard

Nous recevons un e-mail de Paul, le designer :

<table>
<tbody>
<tr>
<td>
<p><strong>Objet&nbsp;</strong>: Fonctionnalité et design<br><strong>De&nbsp;</strong>: Paul<br><strong>À</strong>&nbsp;: Moi</p>
</td>
</tr>
<tr>
<td>
<p>Salut,</p>
<p>&nbsp;</p>
<p>Bienvenue parmi nous ! Laura m’a dit de te briefer sur le design de la nouvelle version du site, alors voici les infos clés.</p>
<p>&nbsp;</p>
<p><strong>Design</strong></p>
<p>Voici&nbsp;<a class="custom-link" href="https://www.figma.com/file/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&amp;node-id=0-1&amp;mode=design&amp;t=1KgUwWWFtuAVbsJ5-0" target="_blank" rel="noopener noreferrer">les maquettes sur Figma</a>&nbsp;pour le design d’interface. J’ai l’habitude de travailler avec la logique de composants sur Figma&nbsp;; Sandra m’a dit que ça te faciliterait le travail sur React. Tu trouveras toutes les ressources dont tu as besoin directement dans la maquette (logo, icônes pour les composants, etc.). Pour cela, il suffit de cliquer sur la ressource souhaitée et de faire "Exporter" au format voulu. Sur les vignettes des logements, pour les images de couverture, j'ai mis une rectangle orange que tu peux remplacer par l'image correspondante.</p>
<p>&nbsp;</p>
<p>Pour avoir un rendu le plus réaliste possible de l'application, utilise&nbsp;<a class="custom-link" href="https://www.figma.com/proto/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&amp;node-id=3-0&amp;t=x8RBKuR4UiE3hhBW-0&amp;scaling=scale-down&amp;page-id=0%3A1&amp;starting-point-node-id=3%3A0&amp;show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">les prototypes du site disponibles ici</a>. Ils te permettront notamment de voir les animations attendues sur les menus déroulants (Collapse).</p>
<p>&nbsp;</p>
<p><strong>Contraintes fonctionnelles</strong></p>
<p>Quelques précisions sur les fonctionnalités du site :</p>
<ul>
<li>Pour le défilement des photos dans la galerie (composant Gallery)&nbsp;:
<ul>
<li>Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.&nbsp;</li>
<li>Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.&nbsp;</li>
<li>S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.</li>
</ul>
</li>
<li>La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.</li>
<li>Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page.&nbsp;</li>
<li>Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
<ul>
<li>Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.</li>
</ul>
</li>
</ul>
<p>&nbsp;</p>
<p>Bon courage pour le développement, j’ai hâte de voir ce que ça va donner&nbsp;!</p>
<p>&nbsp;</p>
<p>Paul,</p>
<p>Desginer</p>
</td>
</tr>
</tbody>
</table>

### Note : L'utilisation de Sass est obligatoire pour générer le style CSS du site web, ainsi que pour mettre en place l'animation CSS du menu déroulant.

