FROM node
RUN npm install -g vsce
CMD ["vsce", "publish", "-p", "${PUBLISH_SECRET}"]
