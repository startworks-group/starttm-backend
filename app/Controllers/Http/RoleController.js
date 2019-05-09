'use strict'
const Role = use('App/Models')

class RoleController {
    async createRole (){
        const roleAdmin = new Role()
        roleAdmin.name = 'Administrator'
        roleAdmin.slug = 'Administrator'
        roleAdmin.description = 'gerenciar privilegios administrativos'
        await roleAdmin.save()
    }
}

module.exports = RoleController
