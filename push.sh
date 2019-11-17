#!/bin/sh

export PATH="$PATH:/Applications/MAMP/Library/bin"
mysqldump -u root --password="qwerty123" eguerra > _sql/eguerra-mysql.sql
