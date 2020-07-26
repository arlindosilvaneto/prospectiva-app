FROM nikolaik/python-nodejs:python3.8-nodejs12

EXPOSE 9090

RUN useradd -ms /bin/bash app

COPY . /app

RUN cd /app && pip3 install -r requirements.txt
RUN cd /app/static/frontend && npm install && npm run build

WORKDIR /app

CMD [ "make", "run" ]
