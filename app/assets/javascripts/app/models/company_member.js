app.models.CompanyMember = Backbone.Model.extend({
  // url: function(){
  //   return '/projects/' + this.get('project_id') + '/members/' + this.get('id');
  // },
  urlRoot: '/company_members'
});