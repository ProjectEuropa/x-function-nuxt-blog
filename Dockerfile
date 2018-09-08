FROM centos:7.4.1708

RUN yum -y update

RUN yum -y install epel-release
RUN yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm

RUN yum -y upgrade
RUN yum -y install nginx

RUN curl -sL https://rpm.nodesource.com/setup_8.x | bash -
RUN yum install -y gcc-c++ make
RUN yum install -y nodejs

RUN npm install -g vue-cli
RUN npm install -g yarn
RUN yarn add nuxt
RUN yarn add create-nuxt-app

ENV HOST 0.0.0.0

CMD ["nginx", "-g", "daemon off;"]

WORKDIR /usr/share/nginx/html