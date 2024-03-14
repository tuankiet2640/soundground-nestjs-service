//user service
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppUser } from '../entities/app-user.entity';
import { CrudService } from '@nestjs-library/crud';

@Injectable()
export class AppUserService extends CrudService<AppUser> {
  constructor(
    @InjectRepository(AppUser) private appUserRepository: Repository<AppUser>,
  ) {
    super(appUserRepository);
  }
}
