# KN-M-01

# A)
## Screenshot von Compass der Datenbanken
![image](https://github.com/user-attachments/assets/c77abbb2-a1a4-4f8a-97d1-564779eda1fb)

## authSource=admin
`authSource=admin` sagt, dass die Authenfizierungsdaten in der admin Datenbank sind.

## SED Befehle
`sudo sed -i 's/#security:/security:\n  authorization: enabled/g' /etc/mongod.conf`

Dieser Befehl aktiviert die Authentifizierungsfunktion in MongoDB. Ansonsten kann jeder, welcher Zugriff auf die Instanz Aktionen durchführen. 

`sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mongod.conf  - sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mongod.conf`

Vorher: MongoDB nur lokal erreichbar

Nacher: Ermöglicht auch externer Zugriff (z.B von anderen Laptops)

## Konfigurationsdatei
![image](https://github.com/user-attachments/assets/3d84345e-fc6d-43a5-955f-c2adec404802)


# B)
## GUI
![image](https://github.com/user-attachments/assets/1965587f-8ba0-4858-9e71-25b3ff7b6478)

![image](https://github.com/user-attachments/assets/1e292a1c-cef7-4dab-b5cd-80821fed5dfc)

Um es nicht manuell einzutragen, hätte man beim birthdate ein Objekt mitgeben müssen mit $date als Feld.

# C)
## Compass
![image](https://github.com/user-attachments/assets/e4194440-a4a8-4214-b83f-1d9396ea271b)

## cmd
![image](https://github.com/user-attachments/assets/411c3146-00e7-4d91-bc60-0b5c28eacd55)

## Erklärung der Commands
show dbs;
Zeigt Datenbanken an.

show databases;
Zeigt Datenbanken an.

use Ihre-Datenbank. 
Wechselt zu einer anderen Datenbank.

show collections;
Zeigt alle collections an in aktuelle Datenbank.

show tables;
genau das gleiche wie show collections;

### Unterschied collections und tables
Macht das selbe.

