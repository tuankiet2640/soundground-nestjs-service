//user controller
import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjs-library/crud";
import { AppUser } from "../entities/app-user.entity";
import { AppUserService } from "../service/app-user.service";

@Controller('/api/users')
@Crud({ entity: AppUser })
export class AppUserController implements CrudController<AppUser> {
  constructor(public readonly crudService: AppUserService) {}
}