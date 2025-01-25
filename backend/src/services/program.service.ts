import { IProgram, Program } from "../models/program.model";

export class ProgramService {
  public async createProgram(programData: IProgram): Promise<IProgram> {
    const newProgram = await Program.create(programData);
    return newProgram;
  }

  public async getPrograms(): Promise<IProgram[]> {
    const programs = await Program.find({});
    return programs;
  }

  public async getProgramById(programId: string): Promise<IProgram | null> {
    const program = await Program.findById(programId);
    return program;
  }

  public async updateProgram(
    programId: string,
    updateData: Partial<IProgram>
  ): Promise<IProgram | null> {
    const updatedProgram = await Program.findByIdAndUpdate(
      programId,
      updateData,
      { new: true }
    );
    return updatedProgram;
  }

  public async deleteProgram(programId: string): Promise<IProgram | null> {
    const deletedProgram = await Program.findByIdAndDelete(programId);
    return deletedProgram;
  }
}
