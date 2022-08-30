#!/bin/sh
# TODO: Is KAPUT
envFile="$HOME/.config/polybar/colorblocks_custom/scripts/env.sh"

REDSHIFT=$(sed "s/REDSHIFT=//g" $envFile)

changeMode() {
  sed -i "s/REDSHIFT=$1/REDSHIFT=$2/g" $envFile
  # REDSHIFT=$2
}


if  [[ $1 = "toggle" ]]; then
  if [ "$REDSHIFT" = on ];
  then
    changeMode "$REDSHIFT" off
    redshift -x
  else
    changeMode "$REDSHIFT" on
    redshift -l 50.56:03.24
  fi
else
    echo $REDSHIFT
fi
