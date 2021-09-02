export interface SSTRunExecutorSchema {
  command: string;
  parameters?: string[];
  stage?: string;
  region?: string;
  roleArn?: string;
  options?: string;
  outputPath: string;
}