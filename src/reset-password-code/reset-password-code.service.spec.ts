import { Test, TestingModule } from '@nestjs/testing';
import { ResetPasswordCodeService } from './reset-password-code.service';

describe('ResetPasswordCodeService', () => {
  let service: ResetPasswordCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResetPasswordCodeService],
    }).compile();

    service = module.get<ResetPasswordCodeService>(ResetPasswordCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
