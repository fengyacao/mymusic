linestart=`sed -n  '/textarea/=' /var/www/html/index.html |awk 'NR==1'`
let lineend=`sed -n  '/page Opage/=' /var/www/html/index.html`-1
 echo $linestart $lineend
sed -i ''$linestart','$lineend'd' /var/www/html/index.html
let linestart-=1

path="/var/www/html/music/lrc/"
#files=$(ls $path)
#for filename in $files
for filename in /var/www/html/music/lrc/*
do
  filename=`echo ${filename##*/}`
  tempfilename=`echo $filename | sed "s/_.*//g"`
  sed -i "$linestart a \<textarea name=\"\" id=\"$tempfilename\" cols=\"30\" rows=\"10\" style=\"display\: none;\"\>" /var/www/html/index.html
  let linestart+=1
 namef=`echo $path$filename`
 echo $namef
  sed -i "$linestart r $namef" /var/www/html/index.html
  linesum=`sed -n "$=" "$path$filename"`
 echo $linestart $linenum
  let linestart=`expr $linestart+$linesum`
 echo $linestart $linenum
  sed -i ''$linestart'a </textarea>' /var/www/html/index.html
  let linestart+=1
done



linestart=`sed -n  '/textarea/=' /var/www/html/dindex.html |awk 'NR==1'`
let lineend=`sed -n  '/page Opage/=' /var/www/html/dindex.html`-1
 echo $linestart $lineend
sed -i ''$linestart','$lineend'd' /var/www/html/dindex.html
let linestart-=1

path="/var/www/html/radio/lrc/"
#files=$(ls $path)
#for filename in $files
for filename in /var/www/html/radio/lrc/*
do
  filename=`echo ${filename##*/}`
  tempfilename=`echo $filename | sed "s/_.*//g"`
  sed -i "$linestart a \<textarea name=\"\" id=\"$tempfilename\" cols=\"30\" rows=\"10\" style=\"display\: none;\"\>" /var/www/html/dindex.html
  let linestart+=1
 namef=`echo $path$filename`
 echo $namef
  sed -i "$linestart r $namef" /var/www/html/dindex.html
  linesum=`sed -n "$=" "$path$filename"`
 echo $linestart $linenum
  let linestart=`expr $linestart+$linesum`
 echo $linestart $linenum
  sed -i ''$linestart'a </textarea>' /var/www/html/dindex.html
  let linestart+=1
done


