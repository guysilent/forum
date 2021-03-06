USE [master]
GO
/****** Object:  Database [forum]    Script Date: 2/18/2020 6:46:33 PM ******/
CREATE DATABASE [forum]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'forum', FILENAME = N'E:\Program Files (x86)\Microsoft SQL\MSSQL15.SQLEXPRESS\MSSQL\DATA\forum.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'forum_log', FILENAME = N'E:\Program Files (x86)\Microsoft SQL\MSSQL15.SQLEXPRESS\MSSQL\DATA\forum_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [forum] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [forum].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [forum] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [forum] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [forum] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [forum] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [forum] SET ARITHABORT OFF 
GO
ALTER DATABASE [forum] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [forum] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [forum] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [forum] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [forum] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [forum] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [forum] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [forum] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [forum] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [forum] SET  DISABLE_BROKER 
GO
ALTER DATABASE [forum] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [forum] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [forum] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [forum] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [forum] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [forum] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [forum] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [forum] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [forum] SET  MULTI_USER 
GO
ALTER DATABASE [forum] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [forum] SET DB_CHAINING OFF 
GO
ALTER DATABASE [forum] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [forum] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [forum] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [forum] SET QUERY_STORE = OFF
GO
USE [forum]
GO
/****** Object:  User [user]    Script Date: 2/18/2020 6:46:33 PM ******/
CREATE USER [user] FOR LOGIN [user] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  DatabaseRole [userrole]    Script Date: 2/18/2020 6:46:33 PM ******/
CREATE ROLE [userrole]
GO
ALTER ROLE [db_accessadmin] ADD MEMBER [user]
GO
ALTER ROLE [db_datareader] ADD MEMBER [user]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [user]
GO
/****** Object:  Table [dbo].[Comments]    Script Date: 2/18/2020 6:46:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comments](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Text] [varchar](max) NULL,
	[UserID] [int] NOT NULL,
	[ThreadID] [int] NOT NULL,
	[Username] [varchar](max) NOT NULL,
	[Timestamp] [datetime] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Threads]    Script Date: 2/18/2020 6:46:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Threads](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Text] [varchar](max) NULL,
	[UserID] [int] NOT NULL,
	[Username] [varchar](max) NOT NULL,
	[Timestamp] [datetime] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 2/18/2020 6:46:33 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [forum] SET  READ_WRITE 
GO
