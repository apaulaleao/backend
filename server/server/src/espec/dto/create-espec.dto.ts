import { IsNotEmpty, IsUrl, IsString } from 'class-validator';
export class CreateEspecDto {
  @IsString()
  name: string;

  year: Date;
  length: Date;

  @IsNotEmpty()
  storyline: string;

  @IsUrl()
  image: string;
}
