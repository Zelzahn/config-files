#!/bin/bash

perc="$(free | grep 'Mem:' | awk '{print (1-($7/$2))*100}' | sed 's/\.[0-9]*//')"
#used="$(free -m | grep 'Mem:' | awk '{print $2-$7}' | sed 's/\.[0-9]*//')"
#total="$(free -m | grep 'Mem:' | awk '{print $2}' | sed 's/\.[0-9]*//')"

#if [ "$perc" -lt "25" ]
#then
#	color='lime'
#elif [ "$perc" -gt "75" ]
#then
#	color='red'
#elif [ "$perc" -gt '50' ]
#then
#	color="yellow"
#fi

swapVal=$(~/config-files/i3/i3scripts/swap.sh)

if [ $(echo $swapVal -n | wc -l) -gt 0 ]
then
	echo -n "$swapVal|" 
fi

val=$(echo "⚙️ ")
echo "$val$perc%"
