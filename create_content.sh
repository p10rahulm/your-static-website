#!/bin/bash

find content/publications/ -type f -regextype sed ! -regex '.*/_.*.md' | xargs rm

if [ $# -eq 0 ]
    then
        max=10
else
    max= $1
fi

echo "max = "
echo $max
for i in `seq 1 $max`
do
    hugo new books/book$i.md
    hugo new code-snippets/snip$i.md
    hugo new courses/course$i.md
    hugo new events/event$i.md
    hugo new notes/note$i.md
    hugo new people/person$i.md
    hugo new posts/post$i.md
    hugo new publications/pub$i.md
    hugo new reviews/review$i.md
    hugo new thoughts/thought$i.md
    hugo new workshops/workshop$i.md
done


