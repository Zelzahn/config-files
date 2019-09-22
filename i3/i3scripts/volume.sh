#!/bin/bash

# If click, open pavucontrol
if [ $BLOCK_BUTTON -eq 1 ]
then
	pavucontrol &
fi

isMuted=$(pamixer --get-mute)
val=$(pamixer --get-volume)

if [ $isMuted = true ];then
	output=$(echo "🔇")
elif [ $val -lt 50 ];then
	output=$(echo ""🔈)
elif [ $val -lt 75 ];then
	output=$(echo "🔉")
else
	output=$(echo "🔊")
fi

# Show volume
temp=$(echo "$val%" | tr -d " ")
output=$(echo "$output $temp")

echo "$output"
