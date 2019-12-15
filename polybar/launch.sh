#!/usr/bin/env bash

# Terminate already running bar instances
killall -q polybar

# Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

# Launch bar
polybar -c /home/zelzahn/config-files/polybar/config.ini mybar >>/tmp/polybar1.log 2>&1 &
