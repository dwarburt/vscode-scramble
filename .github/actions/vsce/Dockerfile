FROM node
RUN npm install -g vsce typescript
CMD ["vsce", "publish", "-p", "${PUBLISH_SECRET}"]
