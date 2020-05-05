FROM nodejs
RUN npm install -g vsce
CMD ["vsce", "publish", "-p", "${PUBLISH_SECRET}"]
