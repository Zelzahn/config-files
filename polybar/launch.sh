#!/usr/bin/env bash

DIR="$HOME/.config/polybar/polybar"

# Terminate already running bar instances
killall -q polybar

# Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

# Put the bar on every monitor
for m in $(polybar --list-monitors | cut -d":" -f1); do
  # Launch the bar
    MONITOR=$m polybar -q main -c "$DIR"/config.ini &
    # MONITOR=$m polybar -q left -c "$DIR"/config.ini &
    # MONITOR=$m polybar -q right -c "$DIR"/config.ini &
    # MONITOR=$m polybar --reload example &
done
