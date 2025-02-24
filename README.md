# 기술 스택
Node.js express PostgreSQL Sequelize

시간이 부족했던 관계로 제가 사용해 본 적이 있는 기술 스택을 선택하였습니다.

+ API 내부 구현은
1. 720시간 이내의 데이터를 추출
2. 해당 데이터에서 좋아요 순으로 내림차순 후 21개 LIMIT </br>
를 하려고 하였으나 1번에서 막혀 진행하지 못하였습니다.

# DB 테이블 데이터 삽입 SQL
```
   INSERT INTO public.posts(
	title, content, user_id, image, "like", comment, create_at)
	select 
       md5(trunc(random() * 10)::text) as title,
       md5(trunc(random() * 10)::text) as content,
	    trunc(random() * 10 + 1) as user_id,
	    md5(trunc(random() * 20)::text) as image,
	    trunc(random() * 10 + 1) as "like",
	    trunc(random() * 10 + 1) as comment,
	    gs as create_at
  from generate_series('2023-02-24 00:00'::timestamp, '2024-02-24 00:00'::timestamp, '8 hours') AS gs;
```
