'use strict'
const { User} = use('App/Models')
// TODO verificar se esta funcionando
const Role = use('Role')

class RoleController {
   async createRole ({ request }) {
     const { name, slug, description } = request.post();
     const role = new Role();
     role.name = name;
     role.slug = slug;
     role.description = description;
     await role.save();
     return role.toJSON();
   }

   async attachRole ({ request }) {
     const { userId, roleId } = request.post()
     const user = await User.find(userId)
     await user.roles().attach([ roleId ])
     return { result: 'ok' }
   }
}

module.exports = RoleController
