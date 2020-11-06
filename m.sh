path="/var/www/html/music/lrc/"
filename="Glacier_Mia Amare.lrc"
echo $path$filename
sed -i "1 r $path$filename" /var/www/html/ctdd.html
