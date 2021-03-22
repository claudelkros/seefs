# SEE 
Système d'Enrollement des Étudiants est une application permettant l'inscription, la gestion des étudiants de Master et Doctorat, ainsi que le suivi de leur cursus.

## Installation
il est necessaire d'installer 2 outils avant de debuter son utilisation
 - [Docker](https://www.docker.com/)
 - [Nodejs](https://nodejs.org/en/)
 - Mongo,
Certe vous est libre d'utiliser une autre base de donnée que [Mongo](https://www.mongodb.com/)
 ## Utilisation
Commencer par cloner le projet
```bash
git clone #git project link
```
Ouvrer le projet que vous venez de cloner

```bash
cd see # le nom du projet
```
Tout d'abord, ouvrer le dossier frontend pour installer les dependances, ou alors aller directement a l'execution du fichier docker

```bash
cd frontend #Ouvrir le dossier
```
Installer les dépendances du frontend

```bash
npm install #Installer les dependances
```
Ensuite, ouvrez le dossier backend, pour installer les dependances

```bash
cd backend #Ouvrir le dossier
```
Installer les dépendances du frontend

```bash
npm install #Installer les dependances
```
Revenez a la source du document ou se trouve le fichier docker-compose.yml
Verifier si les configurations du docker-compose.yml sont corretes

```bash
docker-compose up -d #Execution du fichier docker-compose
```

Enjoy...