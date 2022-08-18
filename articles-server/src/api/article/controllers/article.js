const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async create(ctx) {
    // 사용자의 id를 데이터에 추가
    ctx.request.body.data = {
      ...ctx.request.body.data,
      user: { id: ctx.state.user.id },
    };
    console.log("ctx, ", ctx.request.body);
    // article 데이터 생성
    const response = await super.create(ctx);
    // 잘못된 필드 및 private 값 제외하고 반환
    return response;
  },

  async update(ctx) {
    const userId = ctx.params?.id;

    console.log("userId, ", userId);
    const article = await strapi.entityService.findOne(
      "api::article.article",
      userId
    );

    // article이 존재하지 않을 때 404
    if (!article) {
      return ctx.throw(404);
    }

    console.log("ctx.state.user.id, ", ctx.state.user.id);

    // 정보는 변경 불가
    if (ctx.request.body.user) {
      return ctx.throw(400, "user field cannot be changed");
    }

    // 사용자의 id와 article의 작성자 id가 일치하는지 확인
    if (ctx.state.user.id !== article.user.id) {
      return ctx.unauthorized("You cannot update this entry");
    }

    // article update
    const response = await super.update(ctx);

    // 응답 반환
    return response;
  },

  async delete(ctx) {
    const id = ctx.params?.id;
    const article = await super.findOne({ id });

    if (!article) {
      return ctx.throw(404);
    }

    if (ctx.state.user.id !== article.user.id) {
      return ctx.unauthorized("You cannot remove this entry");
    }

    //  응답 반환
    ctx.status = 204;
  },
}));
