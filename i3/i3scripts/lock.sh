#!/bin/bash

# Default color of ring
D='#888888aa'
# Default color of inside
I='#88888800'
# Verifying ring color
V='#bbbbbbff'
# Wrong ring color
W='#aa888800'
# Color of separator
L='#dddddd00'
# Color of outer separator
S='#DDDDDD00'

T='#000000ff'
D='#444444ff'

# Radius of unlock indicator
WIDTH=100
# Radius of the ring around the indicator
RWIDTH=4


#lock the screen
i3lock --linecolor=$L --separatorcolor=$S -k --timecolor=$T --datecolor=$T --indicator --ringcolor=$D --insidecolor=$I --keyhlcolor=$V  --timestr="%H:%M" -S HDMI1 --veriftext="" --ringvercolor=$V --insidevercolor=$D --wrongtext="" --ringwrongcolor=$W --datestr="%a, %b %d" --insidewrongcolor=$V -B10 --indicator -k --radius=$WIDTH i --ring-width=$RWIDTH

#convert "$img" -blur 0x5 "png:$img"

# Using i3lock-color and blurred background
# i3lock -B10 --indicator -k --insidecolor=FCE8C335
