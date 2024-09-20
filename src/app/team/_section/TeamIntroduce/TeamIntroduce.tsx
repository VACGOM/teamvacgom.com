'use client';

import * as React from 'react';

import { Container } from './style';
import { Images } from '@/styles/images';
import Image from 'next/image';
import TeamCard from '@/app/_component/molecule/TeamCard';

export default function TeamIntroduce() {
  return (
    <Container>
      <div className="title">
        백곰 팀원들을 <br /> 소개합니다
      </div>

      <div className="item">
        <TeamCard
          img={Images.img_heabin}
          name={'변해빈'}
          part={{ main: 'Team Lead', sub: 'BE' }}
          link={{
            mail: 'dev.beeen@kakao.com',
            linkedIn: 'https://www.linkedin.com/in/해빈-변-95a219310',
            github: 'https://github.com/h-beeen',
            blog: 'https://velog.io/@h-beeen/kakao-X-goorm-구름톤-Univ-In-Jeju-우수상-후기',
          }}
        />
        <TeamCard
          img={Images.img_yena}
          name={'전예나'}
          part={{ main: 'Designer' }}
          link={{
            mail: 'yena009@ajou.ac.kr',
            linkedIn: 'https://www.linkedin.com/in/예나-전-464517233/',
            notefolio: '        https://notefolio.net/ponyofolio',
            insta: '        https://www.instagram.com/ponyo_life_pocket/',
          }}
        />
        <TeamCard
          img={Images.img_jieun}
          name={'김지은'}
          part={{ main: 'PM' }}
          link={{
            mail: 'rlawldms47@khu.ac.kr',
            linkedIn: 'https://www.linkedin.com/in/jieun-kim-55966126b/',
          }}
        />{' '}
        <TeamCard
          img={Images.img_hyungju}
          name={'성형주'}
          part={{ main: 'App', sub: 'Infra' }}
          link={{
            mail: 'lehyungju@gmail.com',
            linkedIn: 'https://www.linkedin.com/in/hyungjusung/',
            github: 'https://github.com/HyungJu',
            blog: '',
          }}
        />
        <TeamCard
          img={Images.img_minjeong}
          name={'김민정'}
          part={{ main: 'FE' }}
          link={{
            mail: 'orange_mj@naver.com',
            linkedIn: 'https://www.linkedin.com/in/minjeong-kim-1b7b45300/',
            github: 'https://github.com/minjeoong',
            blog: 'https://orange-mj.tistory.com/37',
          }}
        />
        <TeamCard
          img={Images.img_sohyun}
          name={'오소현'}
          part={{ main: 'FE' }}
          link={{
            mail: 'osohyun0224@naver.com',
            linkedIn: 'https://www.linkedin.com/in/osohyun0224/',
            github: 'https://github.com/osohyun0224',
            blog: 'https://velog.io/@osohyun0224/posts',
          }}
        />
      </div>
    </Container>
  );
}
