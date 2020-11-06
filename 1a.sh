#! /usr/bin/sh
sed -i '7d' /var/www/html/js/script.js
sed -i '6a var songName=[' /var/www/html/js/script.js
#files=$(ls $path)
#for filename in $files
for filename in /var/www/html/music/mp3/* 
do
  filename=`echo "${filename##*/}"`
  tempfilename=`echo $filename | sed "s/_.*//g"`
echo $tempfilename
  sed -i "/var songName/ s/$/\"$tempfilename\",/g" /var/www/html/js/script.js
done
sed -i '/var songName/ s/.$//g' /var/www/html/js/script.js
sed -i '/var songName/ s/$/]/' /var/www/html/js/script.js

sed -i '8d' /var/www/html/js/script.js
sed -i '7a var singers=[' /var/www/html/js/script.js
path="/var/www/html/music/mp3/"
#files=$(ls $path)
#for filename in $files
for filename in /var/www/html/music/mp3/* 
do
  filename=`echo ${filename##*/}`
  tempsigername=`echo $filename | sed "s/.*_//g" | sed "s/\..*//g"`
#tempsigername=`echo Glacier_Mia Amare.webm| sed 's/\..*//g'`
tempsigername=$(echo $tempsigername)
  sed -i "/var singers/ s/$/\"$tempsigername\",/g" /var/www/html/js/script.js
done
sed -i '/var singers/ s/.$//g' /var/www/html/js/script.js
sed -i '/var singers/ s/$/]/' /var/www/html/js/script.js

