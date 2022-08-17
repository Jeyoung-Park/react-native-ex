const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async create(ctx) {
    // 사용자의 id를 데이터에 추가
    ctx.request.body.user = ctx.state.user.id;
    // article 데이터 생성
    const entity = await strapi.services.article.create(ctx.request.body);
    // 잘못된 필드 및 private 값 제외하고 반환
    return sanitizeEntity(entity, { model: strapi.modeles.article });
  },

  async update(ctx) {
    const { id } = ctx.params;
    const article = await strapi.services.article.findOne({ id });

    // article이 존재하지 않을 때 404
    if (!article) {
      return ctx.throw(404);
    }

    //  정보는 변경 불가
    if (ctx.request.body.user) {
      return ctx.throw(400, "user field cannot be changed");
    }

    // 사용자의 id와 article의 작성자 id가 일치하는지 확인
    if (ctx.state.user.id !== article.user.id) {
      return ctx.unauthorized("You cannot update this entry");
    }

    // article update
    const entity = await strapi.services.article.update(
      { id },
      ctx.request.body
    );

    // 응답 반환
    return sanitizeEntity(entity, { model: strapi.models.article });
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const article = await strapi.services.article.findOne({ id });

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
