FROM python:3.7.2-alpine
MAINTAINER Closing Brace Ltd

ENV PYTHONUNBUFFERED 1

# install dependencies
RUN apk update && \
    apk add --virtual build-deps gcc python-dev musl-dev && \
    apk add postgresql-dev && \
    apk add netcat-openbsd

COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

# Setup directory structure
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add entrypoint.sh
COPY ./entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

COPY . /usr/src/app


RUN adduser -D user
USER user

# run server
CMD ["/usr/src/app/entrypoint.sh"]